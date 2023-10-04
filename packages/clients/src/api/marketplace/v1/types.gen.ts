// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export interface LocalImage {
  /** Version you will typically use to define an image in an API call. */
  id: string
  /** List of all commercial types that are compatible with this local image. */
  compatibleCommercialTypes: string[]
  /** Supported architecture for this local image. */
  arch: string
  /** Availability Zone where this local image is available. */
  zone: Zone
}

export interface Organization {
  id: string
  name: string
}

export interface Version {
  /** UUID of this version. */
  id: string
  /** Name of this version. */
  name: string
  /** Creation date of this image version. */
  creationDate?: Date
  /** Date of the last modification of this version. */
  modificationDate?: Date
  /** List of local images available in this version. */
  localImages: LocalImage[]
}

export interface Image {
  /** UUID of this image. */
  id: string
  /** Name of the image. */
  name: string
  /** Text description of this image. */
  description: string
  /** URL of this image's logo. */
  logo: string
  /** List of categories this image belongs to. */
  categories: string[]
  /** Creation date of this image. */
  creationDate?: Date
  /** Date of the last modification of this image. */
  modificationDate?: Date
  /** Expiration date of this image. */
  validUntil?: Date
  /** Typically an identifier for a distribution (ex. "ubuntu_focal"). */
  label: string
  /** List of versions of this image. */
  versions: Version[]
  /** Organization this image belongs to. */
  organization?: Organization
  currentPublicVersion: string
}

export type GetImageRequest = {
  /** Display the image name. */
  imageId: string
}

export interface GetImageResponse {
  image?: Image
}

export type GetVersionRequest = {
  imageId: string
  versionId: string
}

export interface GetVersionResponse {
  version?: Version
}

export type ListImagesRequest = {
  /**
   * A positive integer lower or equal to 100 to select the number of items to
   * display.
   */
  perPage?: number
  /** A positive integer to choose the page to display. */
  page?: number
}

export interface ListImagesResponse {
  images: Image[]
  totalCount: number
}

export type ListVersionsRequest = {
  imageId: string
}

export interface ListVersionsResponse {
  versions: Version[]
  totalCount: number
}
