import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={
                        faker.name.firstName() + " " + faker.name.lastName()
                    }
                    commentPublished={faker.date.recent() + ""}
                    comment={faker.commerce.productDescription()}
                    image={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={
                        faker.name.firstName() + " " + faker.name.lastName()
                    }
                    commentPublished={faker.date.recent() + ""}
                    comment={faker.commerce.productDescription()}
                    image={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={
                        faker.name.firstName() + " " + faker.name.lastName()
                    }
                    commentPublished={faker.date.recent() + ""}
                    comment={faker.commerce.productDescription()}
                    image={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
