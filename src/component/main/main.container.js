import MainPageUI from './main.presenter';
import dayjs from 'dayjs';

export default function MainPage() {
    const onRangeChange = (dates, dateStrings) => {
        if (dates) {
          console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        } else {
          console.log('Clear');
        }
      };

      
    const rangePresets = [
      { label: 'Last 7 Days', value: [dayjs().subtract(7, 'day'), dayjs()] },
      { label: 'Last 14 Days', value: [dayjs().subtract(14, 'day'), dayjs()] },
      { label: 'Last 30 Days', value: [dayjs().subtract(30, 'day'), dayjs()] },
      { label: 'Last 90 Days', value: [dayjs().subtract(90, 'day'), dayjs()] },
    ];
    return(
        <MainPageUI
            onRangeChange = {onRangeChange}
            rangePresets = {rangePresets}
         />
    )  
}