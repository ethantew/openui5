/*!
 * ${copyright}
 */
sap.ui.define(["sap/m/semantic/ShareMenuPage", "sap/m/semantic/SemanticConfiguration", "sap/m/semantic/SemanticPageRenderer"], function(ShareMenuPage, SemanticConfiguration, SemanticPageRenderer) {
	"use strict";

	/**
	 * Constructor for a new FullscreenPage
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * A FullscreenPage is a {@link sap.m.semantic.ShareMenuPage} that is restricted to include only semantic controls of the following semantic types:
	 *
	 * <ul>

	 * </ul>
	 *
	 * @extends sap.m.semantic.ShareMenuPage
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.FullscreenPage
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var FullscreenPage = ShareMenuPage.extend("sap.m.semantic.FullscreenPage", /** @lends sap.m.semantic.FullscreenPage.prototype */ {
		metadata: {
			aggregations: {
				/**
				 * Add action
				 */
				addAction: {
					type: "sap.m.semantic.AddAction",
					multiple: false
				},
				/**
				 * Main action
				 */
				mainAction: {
					type: "sap.m.semantic.MainAction",
					multiple: false
				},
				/**
				 * Positive action
				 */
				positiveAction: {
					type: "sap.m.semantic.PositiveAction",
					multiple: false
				},
				/**
				 * Negative action
				 */
				negativeAction: {
					type: "sap.m.semantic.NegativeAction",
					multiple: false
				},
				/**
				 * Negative action
				 */
				forwardAction: {
					type: "sap.m.semantic.ForwardAction",
					multiple: false
				},
				/**
				 * Edit action
				 */
				editAction: {
					type: "sap.m.semantic.EditAction",
					multiple: false
				},
				/**
				 * Save action
				 */
				saveAction: {
					type: "sap.m.semantic.SaveAction",
					multiple: false
				},
				/**
				 * Cancel action
				 */
				cancelAction: {
					type: "sap.m.semantic.CancelAction",
					multiple: false
				},
				/**
				 * Flag action
				 */
				flagAction: {
					type: "sap.m.semantic.FlagAction",
					multiple: false
				},
				/**
				 * Favorite action
				 */
				favoriteAction: {
					type: "sap.m.semantic.FavoriteAction",
					multiple: false
				},
				/**
				 * OpenIn action
				 */
				openInAction: {
					type: "sap.m.semantic.OpenInAction",
					multiple: false
				},
				/**
				 * DiscussInJam action
				 */
				discussInJamAction: {
					type: "sap.m.semantic.DiscussInJamAction",
					multiple: false
				},
				/**
				 * ShareInJam action
				 */
				shareInJamAction: {
					type: "sap.m.semantic.ShareInJamAction",
					multiple: false
				},
				/**
				 * SendEmail action
				 */
				sendEmailAction: {
					type: "sap.m.semantic.SendEmailAction",
					multiple: false
				},
				/**
				 * SendMessage action
				 */
				sendMessageAction: {
					type: "sap.m.semantic.SendMessageAction",
					multiple: false
				},
				/**
				 * Print action
				 */
				printAction: {
					type: "sap.m.semantic.PrintAction",
					multiple: false
				},
				/**
				 * MessagesIndicator
				 */
				messagesIndicator: {
					type: "sap.m.semantic.MessagesIndicator",
					multiple: false
				},
				/**
				 * SaveAsTile button
				 */
				saveAsTileAction: {
					type: "sap.m.Button",
					multiple: false
				}
			}
		},
		renderer: SemanticPageRenderer.render
	});

	/*
	 Overwrite to proxy saveAsTile content into the respective child control aggregation
	 */
	FullscreenPage.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate) {

		if (sAggregationName === "saveAsTileAction") {

			if (oObject) {
				this._addToInnerAggregation(oObject,
						SemanticConfiguration.getPositionInPage(sAggregationName),
						SemanticConfiguration.getSequenceOrderIndex(sAggregationName),
						bSuppressInvalidate);
				this._saveAsTileAction = oObject;
			} else {//removing
				if (this._saveAsTileAction) {
					this._removeFromInnerAggregation(oObject, SemanticConfiguration.getPositionInPage(sAggregationName), bSuppressInvalidate);
					this._saveAsTileAction = null;
				}
			}
			return;
		}

		ShareMenuPage.prototype.setAggregation.call(this, sAggregationName, oObject, bSuppressInvalidate);
	};

	FullscreenPage.prototype.getAggregation = function(sAggregationName, oObject, bSuppressInvalidate) {

		if (sAggregationName === "saveAsTileAction") {

			return this._saveAsTileAction;
		}

		return ShareMenuPage.prototype.getAggregation.call(this, sAggregationName, oObject, bSuppressInvalidate);
	};

	FullscreenPage.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate) {

		if (sAggregationName === "saveAsTileAction") {

			if (this._saveAsTileAction) {
				this._removeFromInnerAggregation(this._saveAsTileAction, SemanticConfiguration.getPositionInPage(sAggregationName), bSuppressInvalidate);
				this._saveAsTileAction.destroy();
				this._saveAsTileAction = null;
			}
			return this;
		}

		return ShareMenuPage.prototype.destroyAggregation.call(this, sAggregationName, bSuppressInvalidate);
	};

	return FullscreenPage;
}, /* bExport= */ true);
