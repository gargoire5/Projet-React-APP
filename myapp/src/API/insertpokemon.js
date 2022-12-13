import React from "react";
import { useForm } from "react-hook-form";

export function insert() {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch(
            'http://localhost:4444/pokemon/update', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                }
            }
        )
        JSON.stringify(data);
        const pokemons = await response.json()
        return pokemons
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <button type="submit">Valider</button>
      </form>
    );
}React