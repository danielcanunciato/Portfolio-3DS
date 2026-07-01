import "./index.css";

export default function Card({ title, url, subtitle, style }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={style}
        >
            <div className="card-content">
                <h3>{title}<br /><small style={{marginTop: "10px", color: "gray", fontSize: "12px"}}>{subtitle}</small></h3>
                <p>{url}</p>
            </div>

            <span className="card-arrow">↗</span>
        </a>
    );
}