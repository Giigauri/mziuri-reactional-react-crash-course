import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';

export interface ILoginResponse extends IRequestsBaseResponse {
	access_token: string;
}
