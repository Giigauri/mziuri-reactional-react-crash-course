import { IRequestsBaseResponse } from '../../../../../../common/interfaces/requests-base-response.interface';
import { ICategory } from '../category.interface';

export interface ICategoryResponse extends IRequestsBaseResponse {
	category: ICategory;
}
