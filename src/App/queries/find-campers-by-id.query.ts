import { IQuery } from "@nestjs/cqrs";

export class FindCampersByIdQuery implements IQuery {
    constructor(readonly id:string) {}
}