"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const openid_client_1 = require("openid-client");
const session_1 = tslib_1.__importDefault(require("../utils/session"));
function setSessionHandler(sessionStore) {
    return (req, res, tokenSetParameters) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!res) {
            throw new Error('Response is not available');
        }
        if (!req) {
            throw new Error('Request is not available');
        }
        // Get the claims without any OIDC specific claim.
        const session = session_1.default(new openid_client_1.TokenSet(tokenSetParameters));
        // Create the session.
        yield sessionStore.save(req, res, session);
    });
}
exports.default = setSessionHandler;
//# sourceMappingURL=set-session.js.map