import { Injectable } from "@angular/core";
import { BaseDao } from "../base.dao";
import { CollectionDef } from "../../data-store/collection-def";
import { ConnectorSyncDateTime } from "@elevate/shared/models";

@Injectable()
export class ConnectorSyncDateTimeDao extends BaseDao<ConnectorSyncDateTime> {
    public static readonly COLLECTION_DEF: CollectionDef<ConnectorSyncDateTime> = new CollectionDef(
        "connectorSyncDateTime",
        {
            unique: ["connectorType"],
        }
    );

    public getDefaultStorageValue(): ConnectorSyncDateTime[] {
        return [];
    }

    public getCollectionDef(): CollectionDef<ConnectorSyncDateTime> {
        return ConnectorSyncDateTimeDao.COLLECTION_DEF;
    }
}