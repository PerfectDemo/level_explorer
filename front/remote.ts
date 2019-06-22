import IRemote from '../common/remote';

declare global {
    interface Window extends IRemote {}
}