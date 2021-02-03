import React from "react";
import {ArtifactsPage} from "./artifacts";
import {Services} from "@apicurio/registry-services";

const ArtifactsPageFederated = () => {
    Services.getAuthService().authenticateAndRender(() => (<ArtifactsPage />));
    return ;
}

export default ArtifactsPageFederated;
