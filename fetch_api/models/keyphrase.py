from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipFrom
)

from .nodeutils import NodeUtils


class KeyPhrase(StructuredNode, NodeUtils):
    id = StringProperty(index=True)
    text = StringProperty()
    keyphrase = RelationshipFrom('.keyphrase.KeyPhrase', 'HAS_KEYPHRASE')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.id,
                'text': self.text,
            },
        }

    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'KeyPhrase',
                'nodes_related': self.serialize_relationships(self.keyphrase.all()),
            },

        ]
