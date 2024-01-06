import React from 'react';

interface Patient {
    id: number;
    name: string;
    age: number;
}

const Dashboard: React.FC = () => {
    const patients: Patient[] = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 40 },
    ];

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
