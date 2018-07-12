import './index.css';
import Card from './Card';

export default () => (
    <div className="App">
        <header className="App-header">
            Welcome to SSR
        </header>
        <div className="Grid">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
);
