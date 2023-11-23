
import React from "react";
export function ClientCard({ logo }) {
    return (
        <div className="client-card">
            <img src={logo} className="client-card__logo" alt="client logotype" />
        </div>
    );
}
