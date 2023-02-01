export interface IEntry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}

export enum EntryStatus {
    pending = 'PENDING',
    inProgress = 'IN PROGRESS',
    finished = 'FINISHED'
}