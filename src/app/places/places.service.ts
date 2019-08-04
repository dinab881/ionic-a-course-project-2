import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Manhattan Mansion',
            'In the heart of New York city',
            'https://upload.wikimedia.org/wikipedia/commons/a/a6/Hasselt_carnaval_2019_40.jpg',
            149.99,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        ),
        new Place(
            'p2',
            'L\' Amour Toujours',
            'Romantic place in Paris!',
            'https://upload.wikimedia.org/wikipedia/commons/c/c8/Carnaval_in_Hasselt_02.jpg',
            189.99,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        ),
        new Place(
            'p3',
            'The Foggy Palace',
            'Not your average city trip!',
            'https://upload.wikimedia.org/wikipedia/commons/7/71/Hasselt_carnaval_2019_31.jpg',
            99.99,
            new Date('2019-01-01'),
            new Date('2019-12-31')
        )
    ];

    constructor() {
    }

    get places() {
        return [...this._places];
    }

    getPlace(id: string): Place {
        return {
            ... this._places.find(p => p.id === id)
        } as Place;

    }
}
