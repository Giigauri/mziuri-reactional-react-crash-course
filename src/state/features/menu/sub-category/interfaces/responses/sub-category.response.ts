import { IRequestsBaseResponse } from '../../../../../../common/interfaces/requests-base-response.interface';
import { ISubCategory } from '../sub-category.interface';

export interface ISubCategoryResponse extends IRequestsBaseResponse {
	sub_category: ISubCategory;
}
