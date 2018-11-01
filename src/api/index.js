import request from '../utils/request'
import query from './queries'
import config from './config'

export default () => request(config.server.url)(query)
