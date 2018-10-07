import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map';


const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyCpV6x-PpONrEd788vNCCW_B_Efg1mQ3Gc';
@Injectable()

export class YoutubeService {


    constructor(private http: Http) {}

    CallSearch(searchElement: any) {

        return this.http.get(`${BASE_URL}?q=${encodeURI(searchElement)}&type=video&part=snippet&key=${API_TOKEN}`).map(res => res.json());

    }

}