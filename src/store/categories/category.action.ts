import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.util"
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types"


export type fetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type fetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type fetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = fetchCategoriesStart | fetchCategoriesSuccess | fetchCategoriesFailed

export const fetchCategoriesStart = withMatcher((): fetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): fetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray))

export const fetchCategoriesFailed = withMatcher((error: Error): fetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));

