// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
  waitForResource,
} from '../../../bridge'
import type { Region, WaitForOptions } from '../../../bridge'
import { PIN_TRANSIENT_STATUSES } from './content.gen'
import {
  marshalCreatePinByCIDRequest,
  marshalCreatePinByURLRequest,
  marshalCreateVolumeRequest,
  marshalReplacePinRequest,
  marshalUpdateVolumeRequest,
  unmarshalListPinsResponse,
  unmarshalListVolumesResponse,
  unmarshalPin,
  unmarshalReplacePinResponse,
  unmarshalVolume,
} from './marshalling.gen'
import type {
  CreatePinByCIDRequest,
  CreatePinByURLRequest,
  CreateVolumeRequest,
  DeletePinRequest,
  DeleteVolumeRequest,
  GetPinRequest,
  GetVolumeRequest,
  ListPinsRequest,
  ListPinsResponse,
  ListVolumesRequest,
  ListVolumesResponse,
  Pin,
  ReplacePinRequest,
  ReplacePinResponse,
  UpdateVolumeRequest,
  Volume,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/** IPFS Pinning service API. */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Create a new volume from a Project ID. Volume is identified by an ID and
   * used to host pin references. Volume is personal (at least to your
   * organization) even if IPFS blocks and CID are available to anyone. Should
   * be the first command you made because every pin must be attached to a
   * volume.
   *
   * @param request - The request {@link CreateVolumeRequest}
   * @returns A Promise of Volume
   */
  createVolume = (request: Readonly<CreateVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalCreateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes`,
      },
      unmarshalVolume,
    )

  /**
   * Retrieve information about a specific volume.
   *
   * @param request - The request {@link GetVolumeRequest}
   * @returns A Promise of Volume
   */
  getVolume = (request: Readonly<GetVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )

  protected pageOfListVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    this.client.fetch<ListVolumesResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          [
            'project_id',
            request.projectId ?? this.client.settings.defaultProjectId,
          ],
        ),
      },
      unmarshalListVolumesResponse,
    )

  /**
   * Retrieve information about all volumes from a Project ID.
   *
   * @param request - The request {@link ListVolumesRequest}
   * @returns A Promise of ListVolumesResponse
   */
  listVolumes = (request: Readonly<ListVolumesRequest> = {}) =>
    enrichForPagination('volumes', this.pageOfListVolumes, request)

  /**
   * Update volume information (tag, name...).
   *
   * @param request - The request {@link UpdateVolumeRequest}
   * @returns A Promise of Volume
   */
  updateVolume = (request: Readonly<UpdateVolumeRequest>) =>
    this.client.fetch<Volume>(
      {
        body: JSON.stringify(
          marshalUpdateVolumeRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
      },
      unmarshalVolume,
    )

  /**
   * Delete a volume by its ID and every pin attached to this volume. Can take a
   * while, depending of your pinned content.
   *
   * @param request - The request {@link DeleteVolumeRequest}
   */
  deleteVolume = (request: Readonly<DeleteVolumeRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/ipfs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/volumes/${validatePathParam('volumeId', request.volumeId)}`,
    })

  /**
   * Create a pin request. Will fetch and store the content pointed by the
   * provided URL. The content must be available on the public IPFS network. The
   * content (IPFS blocks) will be host by the pinning service until pin
   * deletion. From that point, any other IPFS peer can fetch and host your
   * content: Make sure to pin public or encrypted content. Many pin requests
   * (from different users) can target the same CID. A pin is defined by its ID
   * (UUID), its status (queued, pinning, pinned or failed) and target CID.
   *
   * @param request - The request {@link CreatePinByURLRequest}
   * @returns A Promise of Pin
   */
  createPinByURL = (request: Readonly<CreatePinByURLRequest>) =>
    this.client.fetch<Pin>(
      {
        body: JSON.stringify(
          marshalCreatePinByURLRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/create-by-url`,
      },
      unmarshalPin,
    )

  /**
   * Create a pin request. Will fetch and store the content pointed by the
   * provided CID. The content must be available on the public IPFS network. The
   * content (IPFS blocks) will be host by the pinning service until pin
   * deletion. From that point, any other IPFS peer can fetch and host your
   * content: Make sure to pin public or encrypted content. Many pin requests
   * (from different users) can target the same CID. A pin is defined by its ID
   * (UUID), its status (queued, pinning, pinned or failed) and target CID.
   *
   * @param request - The request {@link CreatePinByCIDRequest}
   * @returns A Promise of Pin
   */
  createPinByCID = (request: Readonly<CreatePinByCIDRequest>) =>
    this.client.fetch<Pin>(
      {
        body: JSON.stringify(
          marshalCreatePinByCIDRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/create-by-cid`,
      },
      unmarshalPin,
    )

  replacePin = (request: Readonly<ReplacePinRequest>) =>
    this.client.fetch<ReplacePinResponse>(
      {
        body: JSON.stringify(
          marshalReplacePinRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/${validatePathParam('pinId', request.pinId)}/replace`,
      },
      unmarshalReplacePinResponse,
    )

  /**
   * Retrieve information about the provided pin ID (not the CID): status, last
   * modification, CID.
   *
   * @param request - The request {@link GetPinRequest}
   * @returns A Promise of Pin
   */
  getPin = (request: Readonly<GetPinRequest>) =>
    this.client.fetch<Pin>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins/${validatePathParam('pinId', request.pinId)}`,
        urlParams: urlParams(['volume_id', request.volumeId]),
      },
      unmarshalPin,
    )

  /**
   * Waits for {@link Pin} to be in a final state.
   *
   * @param request - The request {@link GetPinRequest}
   * @param options - The waiting options
   * @returns A Promise of Pin
   */
  waitForPin = (
    request: Readonly<GetPinRequest>,
    options?: Readonly<WaitForOptions<Pin>>,
  ) =>
    waitForResource(
      options?.stop ??
        (res => Promise.resolve(!PIN_TRANSIENT_STATUSES.includes(res.status))),
      this.getPin,
      request,
      options,
    )

  protected pageOfListPins = (request: Readonly<ListPinsRequest>) =>
    this.client.fetch<ListPinsResponse>(
      {
        method: 'GET',
        path: `/ipfs/v1alpha1/regions/${validatePathParam(
          'region',
          request.region ?? this.client.settings.defaultRegion,
        )}/pins`,
        urlParams: urlParams(
          ['order_by', request.orderBy ?? 'created_at_asc'],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
          ['status', request.status ?? 'unknown_status'],
          ['volume_id', request.volumeId],
        ),
      },
      unmarshalListPinsResponse,
    )

  /**
   * Retrieve information about all pins into a volume.
   *
   * @param request - The request {@link ListPinsRequest}
   * @returns A Promise of ListPinsResponse
   */
  listPins = (request: Readonly<ListPinsRequest>) =>
    enrichForPagination('pins', this.pageOfListPins, request)

  /**
   * Create an unpin request. If the pin was the last to target a specific CID,
   * the content will be erase from storage. The function is indempotent.
   *
   * @param request - The request {@link DeletePinRequest}
   */
  deletePin = (request: Readonly<DeletePinRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/ipfs/v1alpha1/regions/${validatePathParam(
        'region',
        request.region ?? this.client.settings.defaultRegion,
      )}/pins/${validatePathParam('pinId', request.pinId)}`,
      urlParams: urlParams(['volume_id', request.volumeId]),
    })
}