import { IRequestsBaseResponse } from '../../../../../../common/interfaces/requests-base-response.interface';
import { ISubCategory } from '../sub-category.interface';

export interface ISubCategoriesResponse extends IRequestsBaseResponse {
	sub_categories: ISubCategory[];
}
