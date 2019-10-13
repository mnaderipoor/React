import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getThreat, saveThreat } from "../services/threatService";
//import { getGenres } from "../services/genreService";

class ThreatForm extends Form {
  state = {
    data: { Title: "", Description: "", PageCount: "", PublishDate: "" },
    errors: {}
  };

  // the idea behind joi is to define a schema which is a single object
  schema = {
    ID: Joi.string(),
    Title: Joi.string()
      .required()
      .label("Title"),
    Description: Joi.string()
      .required()
      .label("Description"),
    PageCount: Joi.number()
      .required()
      .min(0)
      // .max(1000)
      .label("PageCount"),
    PublishDate: Joi.date()
      .required()
      .label("PublishDate")
  };

  doSubmit = async () => {
    //call the server
    const fff = await saveThreat(this.state.data);
    this.props.history.push("/threats");
  };
  async populateThreats() {
    try {
      const threatId = this.props.match.params.id;
      if (threatId === "new") return;

      const { data: threat } = await getThreat(threatId);
      this.setState({ data: this.mapToViewModel(threat) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  async componentDidMount() {
    await this.populateThreats();
  }
  mapToViewModel(threat) {
    return {
      Title: threat.Title,
      Description: threat.Description,
      PageCount: threat.PageCount,
      PublishDate: threat.PublishDate
    };
  }
  render() {
    return (
      <div>
        {/* <h1>Threat Form {match.params.id}</h1> */}

        <div>
          <h1>Threat Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Title", "Title")}
            {this.renderInput("Description", "Description")}
            {this.renderInput("PageCount", "PageCount")}
            {this.renderInput("PublishDate", "PublishDate")}
            {this.renderButton("submit")}
            <button
              className="btn btn-primary"
              onClick={() => this.props.history.push("/threats")}
            >
              return
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ThreatForm;
