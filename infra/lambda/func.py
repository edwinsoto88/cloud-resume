import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorsTable')

def lambda_handler(event, context):
    try:
        response = table.update_item(
            Key={'id': '0'},
            UpdateExpression='SET #v = if_not_exists(#v, :init) + :incr',
            ExpressionAttributeNames={'#v': 'views'},
            ExpressionAttributeValues={':incr': 1, ':init': 0},
            ReturnValues='UPDATED_NEW'
        )

        views = response['Attributes']['views']
        return views
    except Exception as e:
        # Handle exceptions here (e.g., logging, returning an error message)
        return str(e)
