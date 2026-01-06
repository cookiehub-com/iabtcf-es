import {XMLHttpTestTools} from '@cookiehub/testing';
import {GVL} from "@cookiehub/core";
import {CmpApiModel} from "../src/index.js";

GVL.baseUrl = 'http://sweetcmp.mgr.consensu.org';
/**
 * MochaHooks.
 * This object specifies hooks that must run before or after every test in every file.
 * https://mochajs.org/#root-hook-plugins
 */
export const mochaHooks = {
    beforeEach(done) {
        CmpApiModel.reset();
        XMLHttpTestTools.beforeEach();
        GVL.emptyCache();

        done();
    },
};