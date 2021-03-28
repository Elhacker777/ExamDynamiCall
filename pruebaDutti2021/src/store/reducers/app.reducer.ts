import * as fromNaveActions from '../actions/naves.action';

export interface NaveState {
    data: any[];
    loaded : boolean;
    loading: boolean;
    srror: string;
}
