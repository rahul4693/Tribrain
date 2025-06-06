import React from 'react';
export default function RoomList() {
    const rooms = [{ id: 1, title: "Room near Seneca" }, { id: 2, title: "Shared apartment at Finch" }];
    return (
        <div>
            <h2>Room Listings</h2>
            <ul>
                {rooms.map(room => <li key={room.id}>{room.title}</li>)}
            </ul>
        </div>
    );
}