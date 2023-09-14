import React, {useState} from 'react';
import ticketsData from '../assets/file/tickets.json';
import Ticket from "../component/Ticket";
import Header from "../component/Header";

const Main = () => {
    const tickets = ticketsData.tickets;
    const [filter, setFilter] = useState(['all']);
    const [currency, setCurrency] = useState('RUB')
    const sortTicketsByPrice = (tickets) => {
        return [...tickets].sort((a, b) => a.price - b.price);
    };

    const handleCheckboxChange = (e) => {
        const newFilter = e.target.value;

        setFilter(prevFilter => {
            if (newFilter === 'all') {
                return [newFilter];
            } else if (prevFilter.includes(newFilter)) {
                const prevFilterExcludes = prevFilter.filter(item => item !== newFilter)
                return prevFilterExcludes.length ? prevFilter.filter(item => item !== newFilter) : ['all'];
            } else {
                const prevFilterExсAll = prevFilter.includes('all') ? prevFilter.filter(item => item !== 'all') : prevFilter;
                return [...prevFilterExсAll, newFilter];
            }
        });
    };

    const handleChangeCurrency = (e) => setCurrency(e.target.value)

    const filterTickets = () => {
        if (filter.includes('all')) {
            return sortTicketsByPrice(tickets);
        } else {
            const filteredTickets = tickets.filter(
                (ticket) => filter.includes(ticket.stops.toString())
            );
            return sortTicketsByPrice(filteredTickets);
        }
    };

    return (
        <div className="flex justify-center container pt-8 scrollbar-hide">
            <Header filter={filter} handleCheckboxChange={handleCheckboxChange} currency={currency} handleChangeCurrency={handleChangeCurrency}/>
            <div className="ticket-list flex flex-col">
                {filterTickets().map((ticket, index) => (
                    <Ticket key={index} ticket={ticket} currency={currency}/>
                ))}
            </div>
        </div>
    );
};

export default Main;