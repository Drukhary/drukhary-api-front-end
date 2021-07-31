import React from "react";
import PostManagerService from "../../services/post-manager-service";

const {
    Provider:PostManagerServiceProvider,
    Consumer:PostManagerServiceConsumer
} = React.createContext(new PostManagerService());

export {PostManagerServiceConsumer,PostManagerServiceProvider};