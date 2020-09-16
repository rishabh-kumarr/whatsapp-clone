import React, { useEffect, useState } from 'react'
import './SideBarChat.css'

// @MATERIAL-UI COMPONENTS
import { Avatar } from '@material-ui/core'
import db from './firebase'
import { Link } from 'react-router-dom'

function SideBarChat({ id, name, addNewChat }) {
	const [seed, setSeed] = useState('')
	const [messages, setMessages] = useState('')

	useEffect(() => {
		if (id) {
			db.collection('rooms')
				.doc(id)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				)
		}
	}, [id])

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000))
	}, [])

	const createChat = () => {
		const roomName = prompt('Please enter the name of the chat room:')
		if (roomName) {
			// DO SOMETHING IN DB
			db.collection('rooms').add({
				name: roomName,
			})
		}
	}

	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat__info">
					<h2>{name}</h2>
					<p>{messages[0]?.message}</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add New Chat</h2>
		</div>
	)
}

export default SideBarChat
