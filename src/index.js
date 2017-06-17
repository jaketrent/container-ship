import wakt from 'wakt'

import App from './app'
import store from './app/store'

const el = document.getElementById('app')

store.subscribe(_ => wakt.render(App(), el))

wakt.render(App(), el)
