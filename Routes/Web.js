const homeController = require('../App/http/Controllers/homeController')
const authController = require('../App/http/Controllers/authController')
const cartController = require('../App/http/Controllers/customers/cartController')
const orderController = require('../App/http/Controllers/customers/orderController')
const adminOrderController = require('../App/http/Controllers/admin/orderController')
const statusController = require('../App/http/Controllers/admin/statusController')

// Middlewares
const guest = require('../App/http/Middleware/guest')
const auth = require('../App/http/Middleware/auth')
const admin = require('../App/http/Middleware/admin')


function initRoutes(app){
    app.get('/', homeController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register) 
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)

    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports = initRoutes