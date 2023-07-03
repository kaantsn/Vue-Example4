const app = new Vue({
    el: '#app',
    data: {
      newNote: '',
      notes: []
    },
    mounted() {
      if (localStorage.getItem('notes')) {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      }
    },
    methods: {
      addNote() {
        if (this.newNote.trim() !== '') {
          this.notes.push({
            content: this.newNote.trim()
          });
          this.newNote = '';
          this.saveNotes();
        }
      },
      deleteNote(index) {
        this.notes.splice(index, 1);
        this.saveNotes();
      },
      saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    }
  });
  