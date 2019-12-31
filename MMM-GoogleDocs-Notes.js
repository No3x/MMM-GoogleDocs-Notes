/* global Module */

/* Magic Mirror
 * Module: MMM-GoogleDocs-Notes
 *
 * By No3x
 * MIT Licensed.
 */

Module.register('MMM-GoogleDocs-Notes', {

  defaults: {
    maxNotes: 10,
    pollFrequency: 5 * 60 * 1000, //5 minutes;
    showDatePosted: true,
    dateFormatExact: 'YYYY-MM-DD HH:mm',
    dateFormatRel: 'HH:mm',
    notetitle: 'MMM'
  },

  start: function() {
    this.loaded = false;
    this.notesData = [];

    this.sendSocketNotification("MMM-GOOGLEDOCS-NOTES-GET", this.config);
    const self = this;
    setInterval(function() {
      self.sendSocketNotification("MMM-GOOGLEDOCS-NOTES-GET", self.config);
    }, this.config.pollFrequency);
  },

  getTranslations: function() {
    return {
      en: "translations/en.json",
      de: "translations/de.json"
    }
  },
  getStyles: function () {
    return ["MMM-GoogleDocs-Notes.css"];
  },

  getScripts: function() {
    return ["moment.js"];
  },

  socketNotificationReceived: function(notification, payload) {
    // only update if a data set is returned. Otherwise leave stale data on the screen.
    if ( notification === 'MMM-GOOGLEDOCS-NOTES-RESPONSE') {
      this.notesData = payload.data;
      if (this.notesData.length === 0) {
        this.loaded = true;
        this.hide(1000, {lockString: this.identifier});
      } else if (this.loaded) {
        this.updateDom();
        this.show(1000, {lockString: this.identifier});
      } else {
        this.loaded = true;
        this.updateDom(2000);
      }
    }
  },

  formatDate: function(dateString) {
    const self = this;
    const d = moment(dateString);
    const today = moment();

    if (d.isSame(today, 'day')) {
      return `${self.translate("TODAY").toLowerCase()} ${self.translate("AT").toLowerCase()} ${d.format(this.config.dateFormatRel)}`;
    } else if (d.isSame(moment(today).subtract(1, 'days'), 'day')) {
      return `${self.translate("YESTERDAY").toLowerCase()} ${self.translate("AT").toLowerCase()} ${d.format(this.config.dateFormatRel)}`;
    } else {
      return d.format(this.config.dateFormatExact);
    }
  },

  getDom: function() {
    const self = this;

    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    if (!this.loaded) {
      wrapper.innerHTML = this.translate('LOADING');
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    this.notesData.forEach(function(noteObj) {
      var noteContainer = document.createElement("div");
      noteContainer.classList.add("note-container");

      var noteBody = document.createElement("span");
      noteBody.classList.add("note-body", "bright");
      noteBody.innerHTML = noteObj.noteText
      noteContainer.appendChild(noteBody);

      if (self.config.showDatePosted) {
        var noteDateStamp = document.createElement("span");
        noteDateStamp.classList.add("note-date-stamp");
        noteDateStamp.innerHTML = `${self.translate("POSTED")} ${self.formatDate(noteObj.dateStamp)}`;
        noteContainer.appendChild(noteDateStamp);
      }

      wrapper.appendChild(noteContainer);
    });

    return wrapper;

  }

});