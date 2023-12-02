import moment from 'moment';

export const  Date = (d) => {
    return moment(d).format('MMMM Do YYYY, h:mm:ss a');
}