// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  API as ParentAPI,
  enrichForPagination,
  urlParams,
  validatePathParam,
} from '../../../bridge'
import type { Region } from '../../../bridge'
import {
  marshalCreateJobDefinitionRequest,
  marshalStartJobDefinitionRequest,
  marshalUpdateJobDefinitionRequest,
  unmarshalJobDefinition,
  unmarshalJobRun,
  unmarshalListJobDefinitionsResponse,
  unmarshalListJobRunsResponse,
  unmarshalStartJobDefinitionResponse,
} from './marshalling.gen'
import type {
  CreateJobDefinitionRequest,
  DeleteJobDefinitionRequest,
  GetJobDefinitionRequest,
  GetJobRunRequest,
  JobDefinition,
  JobRun,
  ListJobDefinitionsRequest,
  ListJobDefinitionsResponse,
  ListJobRunsRequest,
  ListJobRunsResponse,
  StartJobDefinitionRequest,
  StartJobDefinitionResponse,
  StopJobRunRequest,
  UpdateJobDefinitionRequest,
} from './types.gen'

const jsonContentHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

/**
 * Serverless Jobs API.
 *
 * This API allows you to manage your Serverless Jobs.
 */
export class API extends ParentAPI {
  /** Lists the available regions of the API. */
  public static readonly LOCALITIES: Region[] = ['fr-par', 'nl-ams', 'pl-waw']

  /**
   * Create a new job definition in a specified Project.
   *
   * @param request - The request {@link CreateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  createJobDefinition = (request: Readonly<CreateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalCreateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
      },
      unmarshalJobDefinition,
    )

  /**
   * Get a job definition by its unique identifier.
   *
   * @param request - The request {@link GetJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  getJobDefinition = (request: Readonly<GetJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
      },
      unmarshalJobDefinition,
    )

  protected pageOfListJobDefinitions = (
    request: Readonly<ListJobDefinitionsRequest> = {},
  ) =>
    this.client.fetch<ListJobDefinitionsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions`,
        urlParams: urlParams(
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListJobDefinitionsResponse,
    )

  /**
   * List all your job definitions with filters.
   *
   * @param request - The request {@link ListJobDefinitionsRequest}
   * @returns A Promise of ListJobDefinitionsResponse
   */
  listJobDefinitions = (request: Readonly<ListJobDefinitionsRequest> = {}) =>
    enrichForPagination(
      'jobDefinitions',
      this.pageOfListJobDefinitions,
      request,
    )

  /**
   * Update an existing job definition associated with the specified unique
   * identifier.
   *
   * @param request - The request {@link UpdateJobDefinitionRequest}
   * @returns A Promise of JobDefinition
   */
  updateJobDefinition = (request: Readonly<UpdateJobDefinitionRequest>) =>
    this.client.fetch<JobDefinition>(
      {
        body: JSON.stringify(
          marshalUpdateJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'PATCH',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
      },
      unmarshalJobDefinition,
    )

  /**
   * Delete an exsisting job definition by its unique identifier.
   *
   * @param request - The request {@link DeleteJobDefinitionRequest}
   */
  deleteJobDefinition = (request: Readonly<DeleteJobDefinitionRequest>) =>
    this.client.fetch<void>({
      method: 'DELETE',
      path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}`,
    })

  /**
   * Run an existing job definition by its unique identifier. This will create a
   * new job run.
   *
   * @param request - The request {@link StartJobDefinitionRequest}
   * @returns A Promise of StartJobDefinitionResponse
   */
  startJobDefinition = (request: Readonly<StartJobDefinitionRequest>) =>
    this.client.fetch<StartJobDefinitionResponse>(
      {
        body: JSON.stringify(
          marshalStartJobDefinitionRequest(request, this.client.settings),
        ),
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-definitions/${validatePathParam('jobDefinitionId', request.jobDefinitionId)}/start`,
      },
      unmarshalStartJobDefinitionResponse,
    )

  /**
   * Get a job run by its unique identifier.
   *
   * @param request - The request {@link GetJobRunRequest}
   * @returns A Promise of JobRun
   */
  getJobRun = (request: Readonly<GetJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}`,
      },
      unmarshalJobRun,
    )

  /**
   * Stop a job run by its unique identifier.
   *
   * @param request - The request {@link StopJobRunRequest}
   * @returns A Promise of JobRun
   */
  stopJobRun = (request: Readonly<StopJobRunRequest>) =>
    this.client.fetch<JobRun>(
      {
        body: '{}',
        headers: jsonContentHeaders,
        method: 'POST',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs/${validatePathParam('jobRunId', request.jobRunId)}/stop`,
      },
      unmarshalJobRun,
    )

  protected pageOfListJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    this.client.fetch<ListJobRunsResponse>(
      {
        method: 'GET',
        path: `/serverless-jobs/v1alpha1/regions/${validatePathParam('region', request.region ?? this.client.settings.defaultRegion)}/job-runs`,
        urlParams: urlParams(
          ['job_definition_id', request.jobDefinitionId],
          ['order_by', request.orderBy],
          ['organization_id', request.organizationId],
          ['page', request.page],
          [
            'page_size',
            request.pageSize ?? this.client.settings.defaultPageSize,
          ],
          ['project_id', request.projectId],
        ),
      },
      unmarshalListJobRunsResponse,
    )

  /**
   * List all job runs with filters.
   *
   * @param request - The request {@link ListJobRunsRequest}
   * @returns A Promise of ListJobRunsResponse
   */
  listJobRuns = (request: Readonly<ListJobRunsRequest> = {}) =>
    enrichForPagination('jobRuns', this.pageOfListJobRuns, request)
}
