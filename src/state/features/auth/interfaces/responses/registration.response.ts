import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';

export interface IRegistrationResponse extends IRequestsBaseResponse {
	success: boolean;
	access_token: string;
}
