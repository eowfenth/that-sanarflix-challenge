import { createActions, createReducer } from './reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * createActions
 */

const { Types, Creators } = createActions({
	coursesSuccess: ['payload'],
	modulesSuccess: ['payload'],
	seeCourse: ['payload'],
	seeModule: ['payload'],
	seeContent: ['payload'],
	markAsSeen: ['payload'],
});

/*
 * Initial State
 */

const INITIAL_STATE = Immutable({
	courses: [],
	modules: [],
	seenCourses: [],
	seenModules: {},
});

/*
 * Reducers
 */

const coursesSuccess = (state: any, { payload }: any) => {
	return state.merge({ courses: payload });
};

const modulesSuccess = (state: any, { payload }: any) => {
	if (state.seenModules.length === 0) {
		let emptyArray = Array(state.modules.length);
		emptyArray = state.modules.map((e: any) => {
			const content = e.conteudos.map((x: any) => {
				return false;
			});
			return content;
		});

		return state.merge({ modules: payload });
	}

	return state.merge({ modules: payload });
};

const seeCourse = (state: any, { payload }: any) => {
	return state;
};

const seeModule = (state: any, { payload }: any) => {
	return state;
};

const markAsSeen = (state: any, { payload }: any) => {
	const { moduleId, contentId } = payload;

	const key = `${moduleId}_${contentId}`;

	return state.setIn(['seenModules', key], true);
};
/*
 * createReducer
 */

export default Creators;
export const reducer = createReducer(INITIAL_STATE, {
	[Types.COURSES_SUCCESS]: coursesSuccess,
	[Types.MODULES_SUCCESS]: modulesSuccess,
	[Types.SEE_COURSE]: seeCourse,
	[Types.SEE_MODULE]: seeModule,
	[Types.MARK_AS_SEEN]: markAsSeen,
});
