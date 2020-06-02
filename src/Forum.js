import React from 'react';
import { Switch, Route, Link, BrowserRouter, useParams, useRouteMatch } from 'react-router-dom';
import './css/Forum.css';

export default function Forum() {
    let match = useRouteMatch();
    class Frontpage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                topics: [
                    {
                        id: 0,
                        title: "sample topic title",
                        threads: [
                            {
                                id: "204",
                                title: "sample thread title",
                                description: "sample description",
                                replyCount: 0,
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: "Suggestions & Constructive Criticism",
                        threads: [
                            {
                                id: "91",
                                title: "Player vs. Player",
                                description: "Give us your thoughts on our current PvP",
                                replyCount: 23,
                            },
                            {
                                id: "40",
                                title: "Player vs. Environment",
                                description: "Give us your thoughts on our current PvE",
                                replyCount: 1,
                            }
                        ]
                    }
                ],

            };
        }
        render() {
            return (
                <main id="forumFrontpage">
                    <h1>Welcome to the Omnis World Forum!</h1>
                    <div id="forumThreadContainer">
                        {this.state.topics.map((data, index) => (
                            <div className="forumTopic" key={index}>
                                <h2>{data.title}</h2>
                                <div className="threadPostsContainer">
                                    {data.threads.map((subdata, subindex) => (
                                        <Link to={`/forum/thread:${subdata.id}`} key={subindex} >
                                            <div className="forumThreadPreview">
                                                <span className="threadTitle">
                                                    <img className="threadIcon" src="" alt=" " />
                                                    <h3>{subdata.title}</h3>
                                                </span>
                                                <div className="threadDescription">{subdata.description}</div>
                                                <i>{`${subdata.replyCount} ${subdata.replyCount != 1 ? "replies" : "reply"}`}</i>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            );
        }
    }
    function ThreadHandler() {
        class Thread extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    id: this.props.id,
                    index: 0,
                    replies: [

                    ],
                };
            }
            render() {
                return (
                    <div id="threadContainer">
                        <div id="forumThreadPost">
                            <div id="postInfo">

                            </div>
                            <article>
                                <section>Id aute officia dolore cillum quis non sit pariatur incididunt nisi culpa est.</section>
					        </article>
                        </div>
                        <div id="forumThreadReplies">
                            <div id="replyIndex">
                                <Link to=""></Link>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        let { threadID } = useParams();
        return (
            <main id="forumThread">
                <Thread id={threadID} />
            </main>
        );
    }
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={Frontpage} />
            <Route path={`${match.path}/thread::threadID`} component={ThreadHandler} />
        </Switch>
    );
}