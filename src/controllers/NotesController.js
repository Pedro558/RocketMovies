const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
  async create(req, res) {
    const { title, description, rating, tags } = req.body;
    const user_id = req.user.id;

    const noteExists = await knex("movieNotes")
      .select("*")
      .where({
        title: title,
        user_id: user_id,
      })
      .first();

    if (noteExists) {
      return res
        .status(400)
        .json({
          errors: ["Já existe uma nota com o mesmo título para o usuário"],
        });
    }

    const [note_id] = await knex("movieNotes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        name,
        user_id
      };
    });

    await knex("movieTags").insert(tagsInsert);

    return res.json();
  }

  async show(req, res) {
    const { id } = req.params;
    const note = await knex("movieNotes").where({ id }).first();

    const tags = await knex
      .select("name")
      .from("movieTags")
      .where({ note_id: id });

    try {
      if (!note) {
        return res.status(400).json("Nota não encontrada");
      }

      res.json({
        note,
        tags,
      });
    } catch (err) {
      console.error(err);
      throw new AppError("Erro na exibição do usuário");
    }

    return res.json();
  }

  async delete(req, res) {
    const { id } = req.params;
    const note = await knex("movieNotes").where({ id });

    if (note.length === 0) {
      return res.status(400).json("Nota não encontrada");
    }

    try {
      await knex("movieNotes").where({ id }).delete();
      res.json();
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro ao excluir a nota");
    }
  }

  async index(req, res) {
    const { title } = req.query;

    const user_id = req.user.id;

    let queryNotes = knex
      .select(
        "movieNotes.id",
        "movieNotes.title",
        "movieNotes.description",
        "movieNotes.rating",
        "movieNotes.user_id"
      )
      .from("movieNotes")
      .where("movieNotes.user_id", user_id);

    try {
      if (title) {
        queryNotes.whereLike("movieNotes.title", `%${title}%`);
      }

      const notes = await queryNotes;

      const userTags = await knex("movieTags").where({ user_id });

      const notesWithTags = notes.map((note) => {
        const noteTags = userTags.filter((tag) => tag.note_id === note.id);
        return {
          ...note,
          tags: noteTags,
        };
      });

      return res.json(notesWithTags);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = NotesController;
