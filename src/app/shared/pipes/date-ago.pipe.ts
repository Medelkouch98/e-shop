import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateAgoPipe implements PipeTransform {

    transform(value: Date, args?: unknown): Date | string {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Juste maintenant';
            const intervals: any = {
                'an': 31536000,
                'mois': 2592000,
                'semaine': 604800,
                'jour': 86400,
                'heure': 3600,
                'minute': 60,
                'seconde': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        const intervalFeminin = ['semaine', 'heure', 'minute', 'seconde'].includes(i);
                        return `Il y a ${intervalFeminin ? 'une' : 'un'} ${i}`; // singular (1 day ago)
                    } else {
                        return `Il y a ${counter} ${i}s`; // plural (2 days ago)
                    }
            }
        }
        return value;
    }

}