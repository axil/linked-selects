<script>
  let users = {
    1: {name: 'aaa', phones: ['1', '2']},
    2: {name: 'bbb', phones: ['11', '22', '33']},
    3: {name: 'ccc', phones: []},
    5: {name: 'ddd', phones: ['111', '222', '333', '444']},
  };
  let user_id = '2';
  let phone_number = users[user_id].phones[1];
  function changed(e){
    phone_number=users[user_id].phones[0];
  }
</script>

<select bind:value={user_id} on:change={changed}>
	{#each Object.entries(users) as [id, user]}
	<option value={id}>{user.name}</option>
	{/each}
</select>
{#if users[user_id].phones.length}
	<select bind:value={phone_number}>
		{#each users[user_id].phones as phone}
			<option value={phone}>{phone}</option>
		{/each}
	</select>
{/if}
<p>You selected user #{user_id} with
{#if phone_number}phone={phone_number}{:else}no phone{/if}
</p>



