import React from 'react';

const Header = ({ filter, handleCheckboxChange, handleChangeCurrency, currency }) => {
    
 
    return (
        <header className="filter mr-5 rounded-md shadow-md border border-gray-300 max-h-[320px] flex flex-col justify-between p-4">
            <div className="flex flex-wrap mb-6">
                <h1 className="w-full mb-3 opacity-75 uppercase">валюта</h1>
                <label className={`text-center block p-2 cursor-pointer transition hover:bg-blue-100 w-1/3 min-w-[68px] ${currency === 'RUB' ? 'bg-[#2196F3]' : 'bg-white'}`}>
                    <input type="checkbox" className="hidden" onChange={handleChangeCurrency} value='RUB'/>
                        RUB
                </label>
                <label className={`text-center block p-2 cursor-pointer transition hover:bg-blue-100 w-1/3 min-w-[68px] ${currency === 'EUR' ? 'bg-[#2196F3]' : 'bg-white'}`}>
                    <input type="checkbox" className="hidden" onChange={handleChangeCurrency} value='EUR'/>
                        EUR
                </label>
                <label className={`text-center block p-2 cursor-pointer transition hover:bg-blue-100 w-1/3 min-w-[68px] ${currency === 'USD' ? 'bg-[#2196F3]' : 'bg-white'}`}>
                    <input type="checkbox" className="hidden" onChange={handleChangeCurrency} value='USD'/>
                        USD
                </label>
            </div>
            <div className="">
  <h1 className="w-full mb-3 opacity-75 uppercase">количество пересадок</h1>
  
  <div className="mb-2">
    <input
      id='all'
      type="checkbox"
      name="filterRadio"
      value="all"
      onChange={handleCheckboxChange}
      checked={filter.includes('all')}
      className="scale-150 mr-2 focus:ring-[#2196F3] focus:ring-1"
    />    
    <label htmlFor='all'>                    
      Все билеты
    </label>    
  </div>

  {/* Далее повторите аналогичную структуру для остальных элементов */}
  <div className="mb-2">
    <input
      id='filter-0'
      type="checkbox"
      name="filterRadio"
      value="0"
      onChange={handleCheckboxChange}
      checked={filter.includes('0')}
      className="scale-150 mr-2 focus:ring-[#2196F3] focus:ring-1"
    />
    <label htmlFor='filter-0'>
      Без пересадок
    </label>
  </div>

  <div className="mb-2">
    <input
      id='filter-1'
      type="checkbox"
      name="filterRadio"
      value="1"
      onChange={handleCheckboxChange}
      checked={filter.includes('1')}
      className="scale-150 mr-2 focus:ring-[#2196F3] focus:ring-1"
    />
    <label htmlFor='filter-1'>
      1 пересадка
    </label>
  </div>

  <div className="mb-2">
    <input
      id='filter-2'
      type="checkbox"
      name="filterRadio"
      value="2"
      onChange={handleCheckboxChange}
      checked={filter.includes('2')}
      className="scale-150 mr-2 focus:ring-[#2196F3] focus:ring-1"
    />
    <label htmlFor='filter-2'>
      2 пересадки
    </label>
  </div>

  <div className="mb-2">
    <input
      id='filter-3'
      type="checkbox"
      name="filterRadio"
      value="3"
      onChange={handleCheckboxChange}
      checked={filter.includes('3')}
      className="scale-150 mr-2 focus:ring-[#2196F3] focus:ring-1"
    />
    <label htmlFor='filter-3'>
      3 пересадки
    </label>
  </div>
</div>

        </header>
    );
};

export default Header;
