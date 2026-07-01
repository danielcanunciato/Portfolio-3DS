import "./index.css";

export default function Card({ title, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
        >
            <div className="card-content">
                <h3>{title}</h3>
                <p>{url}</p>
            </div>

            <span className="card-arrow">↗</span>
        </a>
    );
}