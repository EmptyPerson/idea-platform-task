import React from 'react';
import logoAirline from '../assets/image/AirLineLogo.png';

const Ticket = ({ ticket, currency }) => {
    const {
        price,
        departure_date,
        arrival_date, 
        departure_time,
        arrival_time,
        origin,
        origin_name,
        destination,
        destination_name,
        stops,
    } = ticket;

    const dateFormater = (date) => {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
          ];
        const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

        const parts = date.split(".");
        const year = parseInt(parts[2], 10) + 2000; 
        const newDate = new Date(year, parseInt(parts[1]) - 1, parseInt(parts[0]));
       
        const formattedDay = newDate.getDate();
        const formattedMonth = months[newDate.getMonth()];
        const formattedYear = newDate.getFullYear();
        const formattedDayOfWeek = daysOfWeek[newDate.getDay()];

    return `${formattedDay} ${formattedMonth} ${formattedYear}, ${formattedDayOfWeek}`;
    }

    const textNumberOfTransfers = (numberTransfers) => {
        if (numberTransfers === 0) return 'прямой'
        if (numberTransfers === 1) return `${numberTransfers} пересадка`;
        else return `${numberTransfers} пересадки`
    }
   
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }

      const getCurrencySymbol = (currency) => {
        switch (currency) {
          case 'RUB':
            return '₽'; 
          case 'USD':
            return '$'; 
          case 'EUR':
            return '€'; 
          default:
            return ''; 
        }
      };

    return (
            <div className="w-full rounded-md shadow-md hover:shadow-lg mx-auto mb-8 flex min-h-[200px] py-5 border border-gray-300">
                <div className="w-1/4 p-4 relative">
                    <img src={logoAirline} alt="Логотип авиакомпании"
                         className="h-16 mx-auto mb-2 object-contain"/>
                        <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full  h-16 rounded text-lg">
                        Купить<br/>за  { formatNumber(price) + getCurrencySymbol(currency)}
                        </button>
                </div>
                <div className="w-1/4 p-4 [&>p]:opacity-75">
                    <p className="font-semibold text-5xl">{departure_time}</p>
                    <p className="whitespace-nowrap">{origin + ', ' + origin_name}</p>
                    <p className="">{dateFormater(departure_date)}</p>
                </div>
                <div className="w-1/4 p-4 flex justify-center">
                    <div className="text-center relative mt-6 w-full">
                        <div
                            className="border-t border-b border-gray-400 absolute top-0 left-1/2 transform -translate-x-1/2 w-full"></div>
                        <div className="ml-4 text-2xl absolute right-0 top-0 rotate-90 -mt-[15px] -mr-[10px]" style={{ color: 'grey' }} >
                            &#128743;
                        </div>
                        <p className="mt-2 text-gray-400 uppercase text-xs"> {textNumberOfTransfers(stops)}  </p>
                    </div>


                </div>
                <div className="w-1/4 p-4 [&>p]:opacity-75 text-end">
                    <p className="font-semibold text-5xl">{arrival_time}</p>
                    <p className="whitespace-nowrap">{destination + ', ' + destination_name}</p>
                    <p className="">{dateFormater(arrival_date)}</p>
                </div>
            </div>
    );
};

export default Ticket;
