import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';
import { IUser } from '../user.interface';

export interface IGetMeResponse extends IRequestsBaseResponse {
	user: IUser;
}
