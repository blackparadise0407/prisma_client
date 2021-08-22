import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale('vi', {
    relativeTime: {
        future: 'trong %s',
        past: '%s trước',
        s: 'vài giây trước',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ trước',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm',
    },
});

const moment = dayjs;

export default moment;
