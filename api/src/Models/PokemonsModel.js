import mongoose from "mongoose";

const AbilitySchema = new mongoose.Schema({
  ability: {
    name: String,
    url: String,
  },
  is_hidden: Boolean,
  slot: Number,
});

const FormSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const GameIndexSchema = new mongoose.Schema({
  game_index: Number,
  version: {
    name: String,
    url: String,
  },
});

const MoveSchema = new mongoose.Schema({
  move: {
    name: String,
    url: String,
  },
  version_group_details: [
    {
      level_learned_at: Number,
      move_learn_method: {
        name: String,
        url: String,
      },
      version_group: {
        name: String,
        url: String,
      },
    },
  ],
});

const SpeciesSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const SpriteSchema = new mongoose.Schema({
  front_default: String,
  front_shiny: String,
  front_female: String,
  front_shiny_female: String,
  back_default: String,
  back_shiny: String,
  back_female: String,
  back_shiny_female: String,
});

const PokemonSchema = new mongoose.Schema({
  abilities: [AbilitySchema],
  base_experience: Number,
  cries: {
    latest: String,
    legacy: String,
  },
  forms: [FormSchema],
  game_indices: [GameIndexSchema],
  height: Number,
  held_items: Array,
  id: Number,
  is_default: Boolean,
  location_area_encounters: String,
  moves: [MoveSchema],
  name: String,
  order: Number,
  past_abilities: Array,
  past_types: Array,
  species: SpeciesSchema,
  sprites: SpriteSchema,
});

const PokemonsModel = mongoose.model("Pokemon", PokemonSchema);

export { PokemonsModel };