
import Router from './routers/Router';
import { Provider } from 'react-redux';
import { store } from './store/Store';

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
