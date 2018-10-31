import request from '../utils/request'
import query from './queries'
import server from './config'

export default () => request(server.url)(query)
